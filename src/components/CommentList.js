import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';
import { Button, Comment, Form, Header } from 'semantic-ui-react';

const CommentList = () => (
	<Comment.Group>
		<Header as='h3' dividing>
			Comments
		</Header>

		<Comment>
			<Comment.Avatar src='https://picsum.photos/id/237/200/300' />
			<Comment.Content>
				<Comment.Author as='a'>Matt</Comment.Author>
				<Comment.Metadata>
					<div>Today at 5:42PM</div>
				</Comment.Metadata>
				<Comment.Text>How artistic!</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>

		<Comment>
			<Comment.Avatar src='https://picsum.photos/id/237/200/300' />
			<Comment.Content>
				<Comment.Author as='a'>Elliot Fu</Comment.Author>
				<Comment.Metadata>
					<div>Yesterday at 12:30AM</div>
				</Comment.Metadata>
				<Comment.Text>
					<p>This has been very useful for my research. Thanks as well!</p>
				</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
			<Comment.Group>
				<Comment>
					<Comment.Avatar src='https://picsum.photos/id/237/200/300' />
					<Comment.Content>
						<Comment.Author as='a'>Jenny Hess</Comment.Author>
						<Comment.Metadata>
							<div>Just now</div>
						</Comment.Metadata>
						<Comment.Text>Elliot you are always so right :)</Comment.Text>
						<Comment.Actions>
							<Comment.Action>Reply</Comment.Action>
						</Comment.Actions>
					</Comment.Content>
				</Comment>
			</Comment.Group>
		</Comment>

		<Comment>
			<Comment.Avatar src='https://picsum.photos/id/237/200/300' />
			<Comment.Content>
				<Comment.Author as='a'>Joe Henderson</Comment.Author>
				<Comment.Metadata>
					<div>5 days ago</div>
				</Comment.Metadata>
				<Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
				<Comment.Actions>
					<Comment.Action>Reply</Comment.Action>
				</Comment.Actions>
			</Comment.Content>
		</Comment>

		<Form reply>
			<Form.TextArea />
			<Button content='Add Reply' labelPosition='left' icon='edit' primary />
		</Form>
	</Comment.Group>
);

// const CommentList = (props) => {
// 	const list = props.comments.map(({ avatar, author, text, datetime }) => {
// 		return <li key={uuidv4()}>{commentText}</li>;
// 	});

// 	return <ul className='comment-list'>{list}</ul>;
// };

const mapStateToProps = (state) => ({
	comments: state.comments,
});

export default connect(mapStateToProps)(CommentList);
