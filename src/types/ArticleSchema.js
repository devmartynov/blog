import PropTypes from 'prop-types';

const ArticleSchema = PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    annotaion: PropTypes.string,
    content: PropTypes.string,
    category: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    author: PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
    }),
    views: PropTypes.number,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        createdAt: PropTypes.string,
        updatedAt: PropTypes.string,
        content: PropTypes.string,
        author: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
        })
    }))
});

export default ArticleSchema;
