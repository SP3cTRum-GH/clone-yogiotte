package com.ygcc.yogiotte.controller;

import com.ygcc.yogiotte.domain.Member;
import com.ygcc.yogiotte.repository.MemberRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ygcc.yogiotte.domain.Auth;
import com.ygcc.yogiotte.domain.MemberAuth;
import com.ygcc.yogiotte.repository.AuthRepository;
import com.ygcc.yogiotte.repository.MemberAuthRepository;
import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {

    private final AuthenticationManager authenticationManager;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthRepository authRepository;
    private final MemberAuthRepository memberAuthRepository;

    public AuthController(AuthenticationManager authenticationManager, MemberRepository memberRepository, PasswordEncoder passwordEncoder, AuthRepository authRepository, MemberAuthRepository memberAuthRepository) {
        this.authenticationManager = authenticationManager;
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authRepository = authRepository;
        this.memberAuthRepository = memberAuthRepository;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Member loginRequest) {
        String memId = loginRequest.getMemId();
        String memPw = loginRequest.getMemPw();

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(memId, memPw)
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        return ResponseEntity.ok("User logged in successfully!");
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody Member member) {
        if (memberRepository.findByMemId(member.getMemId()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: memId is already taken!");
        }

        member.setMemPw(passwordEncoder.encode(member.getMemPw()));
        member.setEnable(true);
        member.setRegDate(new Date()); // 현재 시간으로 등록일 설정

        Member savedMember = memberRepository.save(member);

        // 기본 권한 (ROLE_USER) 부여
        Auth defaultAuth = authRepository.findByAuthName("USER")
                .orElseThrow(() -> new RuntimeException("Error: Default USER role not found."));

        MemberAuth memberAuth = new MemberAuth();
        memberAuth.setMember(savedMember);
        memberAuth.setAuth(defaultAuth);
        memberAuth.setEnable(true);
        memberAuth.setRegDate(new Date());

        memberAuthRepository.save(memberAuth);

        return ResponseEntity.ok("User registered successfully!");
    }
}
