package com.akash.crud.entities;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "POIWISE_AUDIENCE_COUNT")
@Access(value=AccessType.FIELD)
public class POIwiseAudienceCount {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column
	private String name;
	
	@Column
    private String area;

    @Column
    private String city;
    
    @Column
    private String poi;
    
    @Column
    private Double radius;
    
    @Column
    private Double latitude;

    @Column
    private Double longitude;
    
    @Column
    private long audienceCount_30;
    
    @Column
    private long audienceCount_60;
    
    @Column
    private long audienceCount_90;
    
    @Column
    private long audienceCount_120;
    
    @Column
    private long audienceCount_150;
    
    @Column
    private long audienceCount_180;

	public POIwiseAudienceCount() {
		super();
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getArea() {
		return area;
	}

	public void setArea(String area) {
		this.area = area;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getPoi() {
		return poi;
	}

	public void setPoi(String poi) {
		this.poi = poi;
	}

	public Double getRadius() {
		return radius;
	}

	public void setRadius(Double radius) {
		this.radius = radius;
	}

	public Double getLatitude() {
		return latitude;
	}

	public void setLatitude(Double latitude) {
		this.latitude = latitude;
	}

	public Double getLongitude() {
		return longitude;
	}

	public void setLongitude(Double longitude) {
		this.longitude = longitude;
	}

	public long getAudienceCount_30() {
		return audienceCount_30;
	}

	public void setAudienceCount_30(long audienceCount_30) {
		this.audienceCount_30 = audienceCount_30;
	}

	public long getAudienceCount_60() {
		return audienceCount_60;
	}

	public void setAudienceCount_60(long audienceCount_60) {
		this.audienceCount_60 = audienceCount_60;
	}

	public long getAudienceCount_90() {
		return audienceCount_90;
	}

	public void setAudienceCount_90(long audienceCount_90) {
		this.audienceCount_90 = audienceCount_90;
	}

	public long getAudienceCount_120() {
		return audienceCount_120;
	}

	public void setAudienceCount_120(long audienceCount_120) {
		this.audienceCount_120 = audienceCount_120;
	}

	public long getAudienceCount_150() {
		return audienceCount_150;
	}

	public void setAudienceCount_150(long audienceCount_150) {
		this.audienceCount_150 = audienceCount_150;
	}

	public long getAudienceCount_180() {
		return audienceCount_180;
	}

	public void setAudienceCount_180(long audienceCount_180) {
		this.audienceCount_180 = audienceCount_180;
	}
    
}
