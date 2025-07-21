package com.ygcc.yogiotte.controller;

import java.util.Date;

import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ygcc.yogiotte.domain.Auth;
import com.ygcc.yogiotte.domain.Member;
import com.ygcc.yogiotte.domain.MemberAuth;
import com.ygcc.yogiotte.dto.LoginDTO;
import com.ygcc.yogiotte.dto.SignupDTO;
import com.ygcc.yogiotte.repository.AuthRepository;
import com.ygcc.yogiotte.repository.MemberAuthRepository;
import com.ygcc.yogiotte.repository.MemberRepository;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@RestController
@RequestMapping("/api")
public class AuthController {


    private final AuthenticationManager authenticationManager;
    private final MemberRepository memberRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthRepository authRepository;
    private final MemberAuthRepository memberAuthRepository;
    private final AuthenticationFailureHandler authenticationFailureHandler;

    public AuthController(AuthenticationManager authenticationManager, MemberRepository memberRepository, PasswordEncoder passwordEncoder, AuthRepository authRepository, MemberAuthRepository memberAuthRepository, AuthenticationFailureHandler authenticationFailureHandler) {
        this.authenticationManager = authenticationManager;
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
        this.authRepository = authRepository;
        this.memberAuthRepository = memberAuthRepository;
        this.authenticationFailureHandler = authenticationFailureHandler;
    }

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDTO login, HttpServletRequest request, HttpServletResponse response) throws Exception {
        String memId = login.getMemId();
        String memPw = login.getMemPw();

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(memId, memPw)
            );

            SecurityContextHolder.getContext().setAuthentication(authentication);

            return ResponseEntity.ok("User logged in successfully!");
        } catch (AuthenticationException e) {
            authenticationFailureHandler.onAuthenticationFailure(request, response, e);
            return ResponseEntity.status(HttpServletResponse.SC_UNAUTHORIZED).build(); // 핸들러가 응답을 처리하므로 빈 응답 반환
        }
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignupDTO signup) {
        if (memberRepository.findByMemId(signup.getMemId()).isPresent()) {
            return ResponseEntity.badRequest().body("Error: memId is already taken!");
        }

        Member member = new Member();
        member.setMemId(signup.getMemId());
        member.setMemPw(passwordEncoder.encode(signup.getMemPw())); // 비밀번호 암호화
        member.setEmail(signup.getEmail());
        member.setPhone(signup.getPhone());
        member.setEnable(true);
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