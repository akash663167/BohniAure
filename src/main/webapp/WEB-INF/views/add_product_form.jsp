<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<%@ page isELIgnored="false"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!doctype html>
<html lang="en">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport"
	content="width=device-width, initial-scale=1, shrink-to-fit=no">

<!-- Bootstrap CSS -->
<link rel="stylesheet"
	href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
	integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
	crossorigin="anonymous">

<title><c:out value="${ title}"> Product Form</c:out></title>
</head>
<body>
	<%@ include file="./base.jsp" %>
	
	<div class="container">
	<p class="bg-danger"><form:errors path="user.*"/></p>
		<div class="row">
		<div class="col-md-6 offset-md-3">
			<form class="form-horizontal" action="addProduct" method="POST">
				<fieldset>

					<!-- Form Name -->
					<legend>Product Registeration</legend>

					<!-- Text input-->
					<div class="form-group">
						<label class="col-md-6 control-label" for="Name">Name</label>
						<div class="col-md-12">
							<input id="Name" name="name" type="text" placeholder="username"
								class="form-control input-md" required="">

						</div>
					</div>
<!-- 					<div class="form-group"> -->
<!-- 						<label class="col-md-6 control-label" for="Name">Name</label> -->
<!-- 						<div class="col-md-12"> -->
							<input id="id" name="id" type="hidden" placeholder="id"
								class="form-control input-md" required="">

<!-- 						</div> -->
<!-- 					</div> -->
					<div class="form-group">
						<label class="col-md-6 control-label" for="Name">Description</label>
						<div class="col-md-12">
							<input id="description" name="description" type="text" placeholder="Enter the product description"
								class="form-control input-md" required="">

						</div>
					</div>
					<div class="form-group">
						<label class="col-md-6 control-label" for="Name">Price</label>
						<div class="col-md-12">
							<input id="price" name="price" type="text" placeholder="Enter the Product Price"
								class="form-control input-md" >

						</div>
					</div>

					

					<!-- Button -->
					<div class="form-group">
						<label class="col-md-6 control-label" for="submit"></label>
						<div class="col-md-12 d-flex justify-content-center p-2 m-2">
						<a href="${request.getContextPath( )}/" class="p-2 px-3 m-2 btn bg-info text-white">Back</a>
							<button id="submit" name="submit" class="p-2 m-2 btn btn-success">Submit</button>
						</div>
					</div>

				</fieldset>
			</form>
		</div>>
		</div>
	</div>
	
	<!-- Optional JavaScript -->
	<!-- jQuery first, then Popper.js, then Bootstrap JS -->
	<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
		integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
		crossorigin="anonymous"></script>
	<script
		src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
		integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
		crossorigin="anonymous"></script>
	<script
		src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
		integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
		crossorigin="anonymous"></script>
</body>
</html>