package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.ImageDTO;
import com.ygcc.yogiotte.dto.RoomDTO;
import com.ygcc.yogiotte.entity.Accommodation;
import com.ygcc.yogiotte.entity.Room;
import com.ygcc.yogiotte.repository.AccommodationRepository;
import com.ygcc.yogiotte.repository.RoomRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;
    private final AccommodationRepository accommodationRepository;

    @Override
    public RoomDTO createRoom(RoomDTO roomDTO) throws Exception {
        Accommodation accommodation = accommodationRepository.findById(roomDTO.getAccommodationId())
                .orElseThrow(() -> new NoSuchElementException("Accommodation not found with id: " + roomDTO.getAccommodationId()));

        Room room = convertToEntity(roomDTO);
        room.setAccommodation(accommodation);

        Room savedRoom = roomRepository.save(room);
        return convertToDTO(savedRoom);
    }

    @Override
    public RoomDTO getRoomById(Long roomId) throws Exception {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new NoSuchElementException("Room not found with id: " + roomId));
        return convertToDTO(room);
    }

    @Override
    public List<RoomDTO> getAllRooms() throws Exception {
        return roomRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Override
    public void updateRoom(Long roomId, RoomDTO roomDTO) throws Exception {
        Room existingRoom = roomRepository.findById(roomId)
                .orElseThrow(() -> new NoSuchElementException("Room not found with id: " + roomId));

        // Update fields
        existingRoom.setName(roomDTO.getName());
        existingRoom.setDescription(roomDTO.getDescription());
        existingRoom.setPrice(roomDTO.getPrice());
        existingRoom.setCapacity(roomDTO.getCapacity());

        roomRepository.save(existingRoom);
    }

    @Override
    public void deleteRoom(Long roomId) throws Exception {
        if (!roomRepository.existsById(roomId)) {
            throw new NoSuchElementException("Room not found with id: " + roomId);
        }
        roomRepository.deleteById(roomId);
    }

    // --- Helper Methods for Conversion ---

    private RoomDTO convertToDTO(Room room) {
        RoomDTO dto = new RoomDTO();
        dto.setId(room.getId());
        if (room.getAccommodation() != null) {
            dto.setAccommodationId(room.getAccommodation().getId());
        }
        dto.setName(room.getName());
        dto.setDescription(room.getDescription());
        dto.setPrice(room.getPrice());
        dto.setCapacity(room.getCapacity());
        dto.setCreatedDate(room.getCreatedDate());

        if (room.getImages() != null) {
            dto.setImages(room.getImages().stream().map(image -> {
                ImageDTO imageDTO = new ImageDTO();
                imageDTO.setId(image.getId());
                imageDTO.setFileName(image.getFileName());
                imageDTO.setFilePath(image.getFilePath());
                return imageDTO;
            }).collect(Collectors.toList()));
        }

        if (room.getRoomTags() != null) {
            dto.setRoomTags(room.getRoomTags().stream()
                    .map(tag -> tag.getTag())
                    .collect(Collectors.toList()));
        }

        return dto;
    }

    private Room convertToEntity(RoomDTO dto) {
        Room room = new Room();
        // Note: ID is not set from DTO to prevent overwriting existing entities on create
        room.setName(dto.getName());
        room.setDescription(dto.getDescription());
        room.setPrice(dto.getPrice());
        room.setCapacity(dto.getCapacity());
        // Tags and Images would need more complex logic to handle from DTO
        return room;
    }
}
