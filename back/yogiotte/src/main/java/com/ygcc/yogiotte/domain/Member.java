package com.ygcc.yogiotte.domain;

import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name = "MEMBER")
@SequenceGenerator(name="MEMBER_SEQ_GEN", sequenceName="MEMBER_SEQ",initialValue = 1, allocationSize = 1)
public class Member {
	
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "MEMBER_SEQ_GEN")
	private int memNo;
	@Column
	private String memId;
	@Column
	private String memPw;
	@Column
	private String email;
	@Column
	private String phone;
	@Column
	private boolean enable;
	@Column
	private Date regDate;
	@Column
	private String oauthType;
	@Column
	private String oauthId;
	
	@OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
	private List<MemberAuth> memberAuth;

	@PrePersist
	protected void onCreate() {
		regDate = new Date();
	}
}
