package com.ygcc.yogiotte.domain;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.PrePersist;
import jakarta.persistence.SequenceGenerator;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "MEMBERAUTH")
@SequenceGenerator(name = "MEMBER_AUTH_SEQ_GEN", sequenceName = "MEMBER_AUTH_SEQ", initialValue = 1, allocationSize = 1)
public class MemberAuth {
	@Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MEMBER_AUTH_SEQ_GEN")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEM_ID")
    private Member member;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "AUTH_ID")
    private Auth auth;

    @Column
    private boolean enable;

    @Column(name = "REG_DATE")
    private Date regDate;

    @Column(name = "UPD_DATE")
    private Date updDate;
    
    @PrePersist
	protected void onCreate() {
		regDate = new Date();
	}
}
