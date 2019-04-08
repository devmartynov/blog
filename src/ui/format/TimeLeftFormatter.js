import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

export default class TimeLeftFormatter extends React.PureComponent {

    static propTypes = {
        value: PropTypes.string,
        withTime: PropTypes.bool,
    };

    //TODO: fix static ' г.' in year format
    render() {
        const minutes = moment().diff(moment(this.props.value).utc(), 'minute');
        if (minutes < 60) {
            return (
                <>
                    {__('{count} {count, plural, one{минута} few{минуты} many{минут}} назад', {
                        count: minutes,
                    })}
                </>
            );
        }

        const hours = moment().diff(moment(this.props.value).utc(), 'hour');
        if (hours < 24) {
            return (
                <>
                    {__('{count} {count, plural, one{час} few{часа} many{часов}} назад', {
                        count: hours,
                    })}
                </>
            );
        }

        const year = moment().diff(moment(this.props.value).utc(), 'year');
        if (year > 0) {
            return (
                <>
                    {moment(this.props.value).locale('ru').format('D MMMM YYYY') + ' г.'}
                </>
            );
        }

        return (
            <>
                {moment(this.props.value).locale('ru').format(this.props.withTime ? 'D MMMM, HH:mm' : 'D MMMM')}
            </>
        );
    }

}
