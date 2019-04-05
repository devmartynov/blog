import PropTypes from 'prop-types';

const ArticleSchema = PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    slug: PropTypes.string,
    subtitle: PropTypes.string,
    annotation: PropTypes.string,
    content: PropTypes.string,
    categoriesIds: PropTypes.arrayOf(PropTypes.number),
    url: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string,
    author: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }),
    views: PropTypes.number,
    likes: PropTypes.number,
    dislikes: PropTypes.number,
    comments: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
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
