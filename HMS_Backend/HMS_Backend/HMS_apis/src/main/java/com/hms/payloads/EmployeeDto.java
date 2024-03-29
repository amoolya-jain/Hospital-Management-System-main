package com.hms.payloads;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@Setter
@Getter
@AllArgsConstructor
@JsonInclude(value = Include.NON_NULL)
public class EmployeeDto {
	
	private Integer id;
	
//	@NotEmpty
	private String qualificaton;

	private double salary;
	
	private LocalDate Hiredate;

	private boolean status;
	
	@JsonIgnoreProperties(value = "employee")
	private UserDto user;

	@JsonIgnoreProperties(value = "employee")
	private DoctorDto doctor;
	
	public boolean getStatus() {
		return status;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getQualificaton() {
		return qualificaton;
	}

	public void setQualificaton(String qualificaton) {
		this.qualificaton = qualificaton;
	}

	public double getSalary() {
		return salary;
	}

	public void setSalary(double salary) {
		this.salary = salary;
	}

	public LocalDate getHiredate() {
		return Hiredate;
	}

	public void setHiredate(LocalDate hiredate) {
		Hiredate = hiredate;
	}

	public UserDto getUser() {
		return user;
	}

	public void setUser(UserDto user) {
		this.user = user;
	}

	public DoctorDto getDoctor() {
		return doctor;
	}

	public void setDoctor(DoctorDto doctor) {
		this.doctor = doctor;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}
}
