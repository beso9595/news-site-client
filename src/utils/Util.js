export default {
	parseQuery: queryString => {
		let query = {};
		if (queryString) {
			let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
			for (let i = 0; i < pairs.length; i++) {
				let pair = pairs[i].split('=');
				query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
			}
		}
		return query;
	},

	buildQuery: queryOb => {
		let url = '';
		Object.keys(queryOb).forEach((k, i) => {
			url += (i === 0 ? '?' : '&') + k + '=' + queryOb[k];
		});
		return url;
	}
};