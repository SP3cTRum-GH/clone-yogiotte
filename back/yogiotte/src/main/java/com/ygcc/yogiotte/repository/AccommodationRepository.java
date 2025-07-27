package com.ygcc.yogiotte.repository;

import com.ygcc.yogiotte.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ygcc.yogiotte.entity.Accommodation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface AccommodationRepository extends JpaRepository<Accommodation, Long> {

    @Query("SELECT DISTINCT a FROM Accommodation a JOIN a.rooms r WHERE " +
           "(a.address LIKE %:location% OR a.name LIKE %:location%) AND " +
           "a.isInternational = :isInternational AND " +
           "r.capacity >= :totalGuests AND " +
           "NOT EXISTS (SELECT res FROM Reservation res WHERE res.room = r AND " +
           "(res.checkInDate < :checkOutDate AND res.checkOutDate > :checkInDate))")
    List<Accommodation> findAvailableAccommodations(
            @Param("location") String location,
            @Param("isInternational") boolean isInternational,
            @Param("totalGuests") int totalGuests,
            @Param("checkInDate") LocalDate checkInDate,
            @Param("checkOutDate") LocalDate checkOutDate
    );
}
