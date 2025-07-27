package com.ygcc.yogiotte.service;

import com.ygcc.yogiotte.dto.ReservationDTO;
import com.ygcc.yogiotte.entity.Reservation;
import com.ygcc.yogiotte.entity.Room;
import com.ygcc.yogiotte.repository.ReservationRepository;
import com.ygcc.yogiotte.repository.RoomRepository;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class ReservationServiceImpl implements ReservationService {

    private final ReservationRepository reservationRepository;
    private final RoomRepository roomRepository;

    @Override
    public ReservationDTO createReservation(ReservationDTO reservationDTO) throws Exception {
        // 1. Room 정보 확인
        Room room = roomRepository.findById(reservationDTO.getRoomId())
                .orElseThrow(() -> new NoSuchElementException("Room not found with id: " + reservationDTO.getRoomId()));

        // 2. 예약 요청 정보 유효성 검증
        validateReservationRequest(reservationDTO, room);

        // 3. 예약 생성 및 저장
        Reservation reservation = convertToEntity(reservationDTO, room);
        Reservation savedReservation = reservationRepository.save(reservation);
        return convertToDTO(savedReservation);
    }

    private void validateReservationRequest(ReservationDTO dto, Room room) throws Exception {
        // 체크인/체크아웃 날짜 유효성 검사
        if (dto.getCheckInDate() == null || dto.getCheckOutDate() == null || !dto.getCheckInDate().isBefore(dto.getCheckOutDate())) {
            throw new IllegalArgumentException("Check-in date must be before check-out date.");
        }

        // 인원수 유효성 검사
        if (dto.getNumberOfGuests() <= 0 || dto.getNumberOfGuests() > room.getCapacity()) {
            throw new IllegalArgumentException("Invalid number of guests for this room.");
        }

        // 날짜 중복 검사
        List<Reservation> overlappingReservations = reservationRepository.findOverlappingReservations(
                dto.getRoomId(),
                dto.getCheckInDate(),
                dto.getCheckOutDate()
        );

        if (!overlappingReservations.isEmpty()) {
            throw new IllegalStateException("The room is already booked for the selected dates.");
        }
    }

    @Override
    public List<ReservationDTO> getReservationsByRoomId(Long roomId) throws Exception {
        if (!roomRepository.existsById(roomId)) {
            throw new NoSuchElementException("Room not found with id: " + roomId);
        }
        List<Reservation> reservations = reservationRepository.findByRoomId(roomId);
        return reservations.stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Override
    public void cancelReservation(Long reservationId) throws Exception {
        if (!reservationRepository.existsById(reservationId)) {
            throw new NoSuchElementException("Reservation not found with id: " + reservationId);
        }
        reservationRepository.deleteById(reservationId);
    }

    // --- Conversion Helpers ---

    private ReservationDTO convertToDTO(Reservation reservation) {
        ReservationDTO dto = new ReservationDTO();
        dto.setId(reservation.getId());
        dto.setRoomId(reservation.getRoom().getId());
        dto.setCheckInDate(reservation.getCheckInDate());
        dto.setCheckOutDate(reservation.getCheckOutDate());
        dto.setNumberOfGuests(reservation.getNumberOfGuests());
        return dto;
    }

    private Reservation convertToEntity(ReservationDTO dto, Room room) {
        Reservation reservation = new Reservation();
        reservation.setRoom(room);
        reservation.setCheckInDate(dto.getCheckInDate());
        reservation.setCheckOutDate(dto.getCheckOutDate());
        reservation.setNumberOfGuests(dto.getNumberOfGuests());
        return reservation;
    }
}
