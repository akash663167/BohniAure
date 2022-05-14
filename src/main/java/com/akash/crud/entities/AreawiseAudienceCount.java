package com.akash.crud.entities;

import java.io.Serializable;
import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "AREAWISE_AUDIENCE_COUNT")
@Access(value=AccessType.FIELD)
public class AreawiseAudienceCount implements Serializable {

    @Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

    @Column
    private String areaName;

    @Column
    private String cityName;

    @Column
    private long audienceCount;

    @Column
    private double latitude;

    @Column
    private double longitude;

    public AreawiseAudienceCount() {

    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public AreawiseAudienceCount(String areaName, String cityName, long audienceCount) {
        super();
        this.areaName = areaName;
        this.cityName = cityName;
        this.audienceCount = audienceCount;
    }

    public String getAreaName() {
        return areaName;
    }

    public void setAreaName(String areaName) {
        this.areaName = areaName;
    }

    public String getCityName() {
        return cityName;
    }

    public void setCityName(String cityName) {
        this.cityName = cityName;
    }

    public long getAudienceCount() {
        return audienceCount;
    }

    public void setAudienceCount(long audienceCount) {
        this.audienceCount = audienceCount;
    }

    public double getLatitude() {
        return latitude;
    }

    public void setLatitude(double latitude) {
        this.latitude = latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public void setLongitude(double longitude) {
        this.longitude = longitude;
    }
}
