import { Controller, Get, Param, Req, Post, Put, Delete } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	get(@Req() req) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Get(':params')
	getWithParams(@Req() req, @Param('params') params) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			params,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Post()
	post(@Req() req) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Post(':params')
	postWithParams(@Req() req, @Param('params') params) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			params,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Put()
	put(@Req() req) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Put(':params')
	putWithParams(@Req() req, @Param('params') params) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			params,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Delete()
	delete(@Req() req) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}

	@Delete(':params')
	deleteWithParams(@Req() req, @Param('params') params) {
		const res = {
			method: req.method,
			url: req.url,
			headers: req.headers,
			params,
			query: req.query,
			body: req.body,
		};
		console.log(res);
		return res;
	}
}
