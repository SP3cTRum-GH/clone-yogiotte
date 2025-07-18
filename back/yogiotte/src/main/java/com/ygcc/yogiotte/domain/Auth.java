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
@Table(name = "AUTH")
@SequenceGenerator(name="AUTH_SEQ_GEN", sequenceName="AUTH_SEQ",initialValue = 1, allocationSize = 1)
public class Auth {
	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "AUTH_SEQ_GEN")
	private int id;
	@Column
	private String authName;
	@Column
	private String authDescript;
	@Column
	private boolean enable;
	@Column(name="reg_date")
	private Date regDate;
	
	@OneToMany(mappedBy = "auth", cascade = CascadeType.ALL)
	private List<MemberAuth> memberAuth;

	@PrePersist
	protected void onCreate() {
		regDate = new Date();
	}
}
