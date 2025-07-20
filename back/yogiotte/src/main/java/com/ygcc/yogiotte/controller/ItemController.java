package com.ygcc.yogiotte.controller;

import com.ygcc.yogiotte.entity.Item;
import com.ygcc.yogiotte.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/api/items")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    /**
     * 상품 등록
     * @param item 등록할 상품 정보
     * @return 생성된 상품 정보와 HTTP 상태 코드 201 (Created)
     */
    @PostMapping
    public ResponseEntity<Item> createItem(@RequestBody Item item) {
        try {
            Item createdItem = itemService.insert(item);
            return new ResponseEntity<>(createdItem, HttpStatus.CREATED);
        } catch (Exception e) {
            // 로그 추가 등 실제 프로덕션에서는 더 상세한 예외 처리가 필요합니다.
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 모든 상품 목록 조회
     * @return 상품 목록과 HTTP 상태 코드 200 (OK)
     */
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        try {
            List<Item> items = itemService.selectAll();
            return new ResponseEntity<>(items, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 특정 ID의 상품 조회
     * @param id 조회할 상품의 ID
     * @return 조회된 상품 정보와 HTTP 상태 코드 200 (OK)
     */
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable("id") Long id) {
        try {
            Item item = new Item();
            item.setId(id);
            Item foundItem = itemService.select(item);
            return new ResponseEntity<>(foundItem, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            // itemService.select에서 findById().orElseThrow()를 사용할 경우 이 예외가 발생합니다.
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상품 정보 수정
     * @param id 수정할 상품의 ID
     * @param item 수정할 상품 정보
     * @return HTTP 상태 코드 200 (OK)
     */
    @PutMapping("/{id}")
    public ResponseEntity<Void> updateItem(@PathVariable("id") Long id, @RequestBody Item item) {
        try {
            item.setId(id); // URL 경로의 ID를 item 객체에 설정
            itemService.update(item);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (NoSuchElementException e) {
            // itemService.update에서 findById().orElseThrow()를 사용할 경우 이 예외가 발생합니다.
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /**
     * 상품 삭제
     * @param id 삭제할 상품의 ID
     * @return HTTP 상태 코드 204 (No Content)
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable("id") Long id) {
        try {
            Item item = new Item();
            item.setId(id);
            itemService.delete(item);
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } catch (Exception e) {
            // deleteById는 대상이 없으면 EmptyResultDataAccessException을 발생시킬 수 있습니다.
            // 필요하다면 해당 예외를 잡아서 404 Not Found를 반환할 수 있습니다.
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}