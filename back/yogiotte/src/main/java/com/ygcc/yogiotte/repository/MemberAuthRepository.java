package com.ygcc.yogiotte.repository;

import com.ygcc.yogiotte.domain.MemberAuth;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberAuthRepository extends JpaRepository<MemberAuth, Integer> {
}
