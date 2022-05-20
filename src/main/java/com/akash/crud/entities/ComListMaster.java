package com.akash.crud.entities;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Access;
import javax.persistence.AccessType;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Immutable;

@Entity
@Immutable
@Table(name = "COM_LIST_MASTER")
@Access(value=AccessType.FIELD)
public class ComListMaster {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column
    private String category;
	
	@OneToMany(mappedBy = "comListMaster", cascade = CascadeType.ALL)
	List listDetails = new ArrayList();
	
	public ComListMaster() {
		
	}

	public ComListMaster(long id, String category) {
		super();
		this.id = id;
		this.category = category;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
