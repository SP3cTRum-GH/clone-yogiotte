package com.ygcc.yogiotte.security.service;

import com.ygcc.yogiotte.domain.Member;
import com.ygcc.yogiotte.repository.MemberRepository;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

@Service
public class CustomUserDetailsService implements UserDetailsService {

	@Autowired
    private MemberRepository memberRepository;


    @Override
    public UserDetails loadUserByUsername(String memId) throws UsernameNotFoundException {
        Member member = memberRepository.findByMemId(memId)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with memId: " + memId));

        return new User(member.getMemId(), member.getMemPw(),
                member.getMemberAuth().stream()
                        .map(memberAuth -> new SimpleGrantedAuthority("ROLE_" + memberAuth.getAuth().getAuthName()))
                        .collect(Collectors.toList()));
    }
}