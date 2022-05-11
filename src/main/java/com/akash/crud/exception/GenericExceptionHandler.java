package com.akash.crud.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;

@ControllerAdvice
public class GenericExceptionHandler {

	
	@ExceptionHandler(value=Exception.class)
	@ResponseStatus(code=HttpStatus.NOT_FOUND)
	public String handleException(Exception e){
		e.printStackTrace();
		System.out.println("Exception "+ e);
		return "exception";
	}
}
