package com.ygcc.yogiotte.service;

import java.util.List;

import com.ygcc.yogiotte.entity.Item;

public interface ItemService {
	// Item 삽입
    public Item insert(Item item) throws Exception;

    // Item 출력(one)
    public Item select(Item item) throws Exception;

    // Item 수정
    public void update(Item item) throws Exception;

    // Item 삭제
    public void delete(Item item) throws Exception;

    // Item 전체 출력
    public List<Item> selectAll() throws Exception;
}
