package com.ygcc.yogiotte.controller;

import com.ygcc.yogiotte.dto.AccommodationDTO;
import com.ygcc.yogiotte.dto.SearchRequestDTO;
import com.ygcc.yogiotte.service.SearchService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/search")
@RequiredArgsConstructor
public class SearchController {

    private final SearchService searchService;

    @GetMapping
    public ResponseEntity<?> search(SearchRequestDTO searchRequest) {
        try {
            List<AccommodationDTO> results = searchService.search(searchRequest);
            return new ResponseEntity<>(results, HttpStatus.OK);
        } catch (IllegalArgumentException e) {
            // 유효성 검사 실패 시 400 Bad Request 반환
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Exception e) {
            // 그 외 서버 오류
            return new ResponseEntity<>("검색 중 오류가 발생했습니다.", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
