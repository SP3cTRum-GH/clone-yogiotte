package com.ygcc.yogiotte.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.ygcc.yogiotte.entity.Image;
import com.ygcc.yogiotte.entity.Item;
import com.ygcc.yogiotte.entity.ItemTag;
import com.ygcc.yogiotte.repository.ImageRepository;
import com.ygcc.yogiotte.repository.ItemRepository;
import com.ygcc.yogiotte.repository.ItemTagRepository;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@Transactional
@Log4j2
@RequiredArgsConstructor
public class ItemServiceImpl implements ItemService {

	private final ItemRepository itemRepository;
	private final ImageRepository imageRepository;
    private final ItemTagRepository itemTagRepository;
//	private final ModelMapper modelMapper;
	
	@Override
	public Item insert(Item item) throws Exception {
		// 양방향 연관관계 설정
        if (item.getImages() != null) {
            for (Image image : item.getImages()) {
                image.setItem(item);
            }
        }

        if (item.getItemTags() != null) {
            for (ItemTag tag : item.getItemTags()) {
                tag.setItem(item);
            }
        }
        
        // 2. 저장
		return itemRepository.save(item);
	}

	@Override
	public Item select(Item item) throws Exception {
		return itemRepository.getOne(item.getId());
	}

	@Override
	public void update(Item item) throws Exception {
		Item itemEntity = itemRepository.getOne(item.getId());
		itemEntity.setName(item.getName());
		itemEntity.setDescription(item.getDescription());
		itemEntity.setLocation(item.getLocation());
		itemEntity.setCategory(item.getCategory());
		itemEntity.setPrice(item.getPrice());
		itemEntity.setCreatedDate(item.getCreatedDate());
	}

	@Override
	public void delete(Item item) throws Exception {
		itemRepository.deleteById(item.getId());
	}

	@Override
	public List<Item> selectAll() throws Exception {
		return itemRepository.findAll(Sort.by(Direction.DESC, "id"));
	}

}
