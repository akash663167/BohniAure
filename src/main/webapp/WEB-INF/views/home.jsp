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


	<div class="container">
		<h2 class=" p-2 m-2  text-center">Welcome to Product App</h2>
		<div class="row">
			<div class="col-md-12">

				<table class="table">
					<thead class="thead-dark">
						<tr>
							<th scope="col">Sr.No</th>
							<th scope="col">Product Name</th>
							<th scope="col">Description</th>
							<th scope="col">price</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
					
					<c:forEach items="${productList }" var ="p" varStatus="c">
						<tr>
							<td scope="row">${c.count}</td>
							<td>${p.name} </td>
							<td>${p.description}</td>
							<td class="font-weight-bold">&#8377;&nbsp;${p.price}</td>
							<td class="font-weight-bold"></td>
						</tr>
						</c:forEach>
					</tbody>
				</table>
			</div>
			<div class="container text-center">
				<a href="add-product" class="btn btn-outline-success">Add
					Product</a>
			</div>
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