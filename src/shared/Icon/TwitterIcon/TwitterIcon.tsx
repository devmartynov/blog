import React from 'react';

import { html } from 'components';
import { IntIconOwnProps } from '../Icon';

const bem = html.bem('TwitterIcon');

export default class TwitterIcon extends React.PureComponent<IntIconOwnProps> {

    static defaultProps = {
        width: 24,
        height: 24,
        viewBox: '0 0 24 24',
        fill: '#000',
    };

    render() {
        return (
            <svg
                className={bem(bem.block(), this.props.className)}
                width={this.props.width}
                height={this.props.width}
                style={this.props.style}
                viewBox={this.props.viewBox}
                xmlnsXlink='http://www.w3.org/1999/xlink'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    fill={this.props.fill}
                    d='M11.769 9.458l.035.562-.578-.068c-2.105-.264-3.943-1.16-5.503-2.663l-.763-.746-.197.551c-.416 1.228-.15 2.525.717 3.397.462.482.358.55-.44.264-.277-.092-.52-.16-.543-.126-.08.08.197 1.124.416 1.537.3.574.914 1.136 1.584 1.47l.567.263-.67.012c-.648 0-.671.011-.602.252.231.746 1.144 1.538 2.162 1.882l.717.241-.625.367a6.593 6.593 0 0 1-3.098.85c-.52.01-.948.057-.948.091 0 .115 1.41.758 2.231 1.01 2.463.746 5.388.425 7.584-.85 1.56-.906 3.122-2.707 3.85-4.452.393-.93.786-2.627.786-3.442 0-.528.035-.597.682-1.228.382-.367.74-.769.81-.884.115-.218.104-.218-.486-.023-.983.345-1.122.299-.636-.218.358-.367.786-1.032.786-1.227 0-.035-.173.023-.37.126-.208.115-.67.287-1.017.39l-.624.195-.567-.379c-.312-.206-.751-.436-.983-.505-.59-.16-1.49-.137-2.023.046-1.445.517-2.358 1.848-2.254 3.305z'
                />
            </svg>
        );
    }
}