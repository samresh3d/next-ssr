import style from './style.module.css';

type Props = {
    post: PostType;
}

export type PostType = {
    "userId": Number;
    "id": Number;
    "title": String;
    "body": String;
};

export default function Post({ post }: Props) {

    return (
        <div className={style.postContainer}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
} 