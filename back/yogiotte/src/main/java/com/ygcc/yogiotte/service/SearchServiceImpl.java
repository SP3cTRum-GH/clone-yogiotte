package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.AccommodationDTO;
import com.ygcc.yogiotte.dto.RoomDTO;
import com.ygcc.yogiotte.dto.SearchRequestDTO;
import com.ygcc.yogiotte.entity.Accommodation;
import com.ygcc.yogiotte.repository.AccommodationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Log4j2
public class SearchServiceImpl implements SearchService {

    private final AccommodationRepository accommodationRepository;

    @Override
    public List<AccommodationDTO> search(SearchRequestDTO request) throws Exception {
        log.info("Search request received: {}", request);

        validateSearchRequest(request);

        int totalGuests = (request.getAdults() != null ? request.getAdults() : 0) + (request.getChildren() != null ? request.getChildren() : 0);

        List<Accommodation> accommodations = accommodationRepository.findAvailableAccommodations(
                request.getLocation(),
                request.getIsInternational(),
                totalGuests,
                request.getCheckInDate(),
                request.getCheckOutDate()
        );

        // 검색된 숙소 목록을 DTO로 변환하되, 조건에 맞는 방만 필터링합니다.
        return accommodations.stream()
                .map(accommodation -> convertToDTOWithFilteredRooms(accommodation, totalGuests))
                .collect(Collectors.toList());
    }

    private void validateSearchRequest(SearchRequestDTO request) {
        if (request.getCheckInDate() == null || request.getCheckOutDate() == null || !request.getCheckInDate().isBefore(request.getCheckOutDate())) {
            throw new IllegalArgumentException("체크인 날짜는 체크아웃 날짜보다 이전이어야 합니다.");
        }

        long nights = ChronoUnit.DAYS.between(request.getCheckInDate(), request.getCheckOutDate());
        if (nights > 30) {
            throw new IllegalArgumentException("최대 30박까지만 검색할 수 있습니다.");
        }

        if (Boolean.TRUE.equals(request.getIsInternational())) {
            if (request.getAdults() > 36) {
                throw new IllegalArgumentException("해외 숙소는 성인 36명까지 검색 가능합니다.");
            }
            if (request.getChildren() > 9) {
                throw new IllegalArgumentException("해외 숙소는 아동 9명까지 검색 가능합니다.");
            }
            if (request.getNumberOfRooms() > 9) {
                throw new IllegalArgumentException("해외 숙소는 객실 9개까지 검색 가능합니다.");
            }
        } else {
            int totalGuests = (request.getAdults() != null ? request.getAdults() : 0) + (request.getChildren() != null ? request.getChildren() : 0);
            if (totalGuests > 10) {
                throw new IllegalArgumentException("국내 숙소는 총 10명까지 검색 가능합니다.");
            }
        }
    }

    private AccommodationDTO convertToDTOWithFilteredRooms(Accommodation accommodation, int totalGuests) {
        AccommodationDTO dto = new AccommodationDTO();
        dto.setId(accommodation.getId());
        dto.setName(accommodation.getName());
        dto.setAddress(accommodation.getAddress());
        dto.setDescription(accommodation.getDescription());
        dto.setInternational(accommodation.isInternational());

        if (accommodation.getRooms() != null) {
            List<RoomDTO> filteredRooms = accommodation.getRooms().stream()
                    // 인원수 조건에 맞는 방만 필터링
                    .filter(room -> room.getCapacity() >= totalGuests)
                    .map(room -> {
                        RoomDTO roomDTO = new RoomDTO();
                        roomDTO.setId(room.getId());
                        roomDTO.setName(room.getName());
                        roomDTO.setPrice(room.getPrice());
                        roomDTO.setCapacity(room.getCapacity());
                        return roomDTO;
                    })
                    .collect(Collectors.toList());
            dto.setRooms(filteredRooms);
        } else {
            dto.setRooms(Collections.emptyList());
        }

        return dto;
    }

    // 기존 convertToDTO는 다른 곳에서 사용될 수 있으므로 유지하거나 삭제할 수 있습니다.
    private AccommodationDTO convertToDTO(Accommodation accommodation) {
        AccommodationDTO dto = new AccommodationDTO();
        dto.setId(accommodation.getId());
        dto.setName(accommodation.getName());
        dto.setAddress(accommodation.getAddress());
        dto.setDescription(accommodation.getDescription());
        dto.setInternational(accommodation.isInternational());

        if (accommodation.getRooms() != null) {
            dto.setRooms(accommodation.getRooms().stream().map(room -> {
                RoomDTO roomDTO = new RoomDTO();
                roomDTO.setId(room.getId());
                roomDTO.setName(room.getName());
                roomDTO.setPrice(room.getPrice());
                roomDTO.setCapacity(room.getCapacity());
                return roomDTO;
            }).collect(Collectors.toList()));
        } else {
            dto.setRooms(Collections.emptyList());
        }

        return dto;
    }
}
