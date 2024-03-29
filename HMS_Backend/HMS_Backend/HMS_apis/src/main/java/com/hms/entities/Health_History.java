package com.hms.entities;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "health_history")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Health_History {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "health_history_Id")
	private Integer id;

	@Column(length = 300)
	private String diseases;

	@Column(name = "appointment_date")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate appointmentDate;

	@Column(name = "symptoms", length = 100)
	private String symptoms;

	@Column(name = "paid_amount")
	private double paidAmount;

	@Column(name = "appointment_time")
	@JsonFormat(pattern = "HH:mm:ss")
	private LocalTime appointmentTime;

	@Column(name = "admit_date")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate admitDate;

	@Column(name = "payment_status", columnDefinition = "boolean default false")
	private Boolean paymentStatus;

	@Column(name = "allocated_bed", length = 45)
	private String allocatedBed;

	@Column(name = "prescription_instruction", length = 1000)
	private String prescriptionInstruction;

	@Column(name = "discharge_date")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate dischargeDate;

	@CreationTimestamp
	@Column(name = "payment_date")
	@JsonFormat(pattern = "yyyy-MM-dd")
	private LocalDate paymentDate;

	@ManyToOne
	@JoinColumn(name = "patient_Id", nullable = false)
	private Patient patient;

	@OneToMany(mappedBy = "healthHistory", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private List<Medicine> medicines = new ArrayList<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getDiseases() {
		return diseases;
	}

	public void setDiseases(String diseases) {
		this.diseases = diseases;
	}

	public LocalDate getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(LocalDate appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public String getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptoms) {
		this.symptoms = symptoms;
	}

	public double getPaidAmount() {
		return paidAmount;
	}

	public void setPaidAmount(double paidAmount) {
		this.paidAmount = paidAmount;
	}

	public LocalTime getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(LocalTime appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public LocalDate getAdmitDate() {
		return admitDate;
	}

	public void setAdmitDate(LocalDate admitDate) {
		this.admitDate = admitDate;
	}

	public Boolean getPaymentStatus() {
		return paymentStatus;
	}

	public void setPaymentStatus(Boolean paymentStatus) {
		this.paymentStatus = paymentStatus;
	}

	public String getAllocatedBed() {
		return allocatedBed;
	}

	public void setAllocatedBed(String allocatedBed) {
		this.allocatedBed = allocatedBed;
	}

	public String getPrescriptionInstruction() {
		return prescriptionInstruction;
	}

	public void setPrescriptionInstruction(String prescriptionInstruction) {
		this.prescriptionInstruction = prescriptionInstruction;
	}

	public LocalDate getDischargeDate() {
		return dischargeDate;
	}

	public void setDischargeDate(LocalDate dischargeDate) {
		this.dischargeDate = dischargeDate;
	}

	public LocalDate getPaymentDate() {
		return paymentDate;
	}

	public void setPaymentDate(LocalDate paymentDate) {
		this.paymentDate = paymentDate;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public List<Medicine> getMedicines() {
		return medicines;
	}

	public void setMedicines(List<Medicine> medicines) {
		this.medicines = medicines;
	}
}