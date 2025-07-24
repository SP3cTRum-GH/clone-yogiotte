package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.AccommodationDTO;
import com.ygcc.yogiotte.dto.RoomDTO;
import com.ygcc.yogiotte.entity.Accommodation;
import com.ygcc.yogiotte.repository.AccommodationRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
@Log4j2
public class AccommodationServiceImpl implements AccommodationService {

    private final AccommodationRepository accommodationRepository;

    @Override
    public AccommodationDTO createAccommodation(AccommodationDTO accommodationDTO) throws Exception {
        Accommodation accommodation = convertToEntity(accommodationDTO);
        Accommodation savedAccommodation = accommodationRepository.save(accommodation);
        return convertToDTO(savedAccommodation);
    }

    @Override
    public AccommodationDTO getAccommodationById(Long accommodationId) throws Exception {
        Accommodation accommodation = accommodationRepository.findById(accommodationId)
                .orElseThrow(() -> new NoSuchElementException("Accommodation not found with id: " + accommodationId));
        return convertToDTO(accommodation);
    }

    @Override
    public List<AccommodationDTO> getAllAccommodations() throws Exception {
        return accommodationRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void updateAccommodation(Long accommodationId, AccommodationDTO accommodationDTO) throws Exception {
        Accommodation existingAcc = accommodationRepository.findById(accommodationId)
                .orElseThrow(() -> new NoSuchElementException("Accommodation not found with id: " + accommodationId));

        existingAcc.setName(accommodationDTO.getName());
        existingAcc.setAddress(accommodationDTO.getAddress());
        existingAcc.setDescription(accommodationDTO.getDescription());
        existingAcc.setInternational(accommodationDTO.isInternational());

        accommodationRepository.save(existingAcc);
    }

    @Override
    public void deleteAccommodation(Long accommodationId) throws Exception {
        if (!accommodationRepository.existsById(accommodationId)) {
            throw new NoSuchElementException("Accommodation not found with id: " + accommodationId);
        }
        accommodationRepository.deleteById(accommodationId);
    }

    // --- Conversion Helpers ---

    private AccommodationDTO convertToDTO(Accommodation accommodation) {
        AccommodationDTO dto = new AccommodationDTO();
        dto.setId(accommodation.getId());
        dto.setName(accommodation.getName());
        dto.setAddress(accommodation.getAddress());
        dto.setDescription(accommodation.getDescription());
        dto.setInternational(accommodation.isInternational());

        // To avoid circular dependency issues, we might not want to load all rooms here.
        // If needed, this can be a more complex DTO.
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

    private Accommodation convertToEntity(AccommodationDTO dto) {
        Accommodation accommodation = new Accommodation();
        accommodation.setName(dto.getName());
        accommodation.setAddress(dto.getAddress());
        accommodation.setDescription(dto.getDescription());
        accommodation.setInternational(dto.isInternational());
        // Rooms are managed via RoomService, so we don't set them from here.
        return accommodation;
    }
}
