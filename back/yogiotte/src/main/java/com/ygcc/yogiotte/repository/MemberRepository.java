package com.ygcc.yogiotte.repository;

import com.ygcc.yogiotte.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Integer> {
    Optional<Member> findByMemId(String memId);
}
