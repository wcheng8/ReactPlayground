import React, { Component } from "react";
import axios from "axios";

class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
			errormes: [],
		};
	}

	componentDidMount() {
		axios
			.get("http://jsonplaceholder.typicode.com/posts1")
			.then((res) => {
				this.setState({ posts: res.data });
			})
			.catch((error) => {
				console.log(error);
				this.setState({ errormes: "Error Retreiving Data" });
			});
	}
	render() {
		const { errormes, posts } = this.state;
		return (
			<div>
				List of posts
				{posts.length
					? posts.map((post) => <div key={post.id}>{post.title}</div>)
					: null}
				{errormes ? <div>{errormes}</div> : null}
			</div>
		);
	}
}

export default PostList;
