$(document).ready(function () {
	let review = new Review(123);
	review.render('#review_wrapper');

	$('#addReview').on('click', function () {
		let id_product = 123;
		let lastReviewId = 0;
		let id_review = lastReviewId + 1;
		let text = $('#review')[0].value;
		review.add(id_product, id_review, text);
	})

	$('#approveReview').on('click', function () {

	})


	$('#deleteReview').on('click', function () {
		let id_product = 123;
		let lastReviewId = 0;
		let id_review = lastReviewId + 1;
		let text = $('#review')[0].value;
		review.delete(id_product, id_review, text);
	})
});