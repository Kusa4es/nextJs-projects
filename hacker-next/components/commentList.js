import Comment from './comment';

export default ({comments}) => (
    <React.Fragment>
        {comments.map(comment =>(
            <Comment key={comment.id} comment={comment} />
        ))}
    </React.Fragment>
)