let path = '/author';

module.exports = router => {
	router.get(path, (ctx, next) => {
		ctx.body = 'get author';
	});

	router.post(path, (ctx, next) => {

	});

	router.patch(path, (ctx, next) => {

	})
}
