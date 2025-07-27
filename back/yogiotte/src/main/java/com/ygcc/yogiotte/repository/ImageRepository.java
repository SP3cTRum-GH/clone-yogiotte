package com.ygcc.yogiotte.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ygcc.yogiotte.entity.Image;

public interface ImageRepository extends JpaRepository<Image, Long> {}
