import React, { Component } from 'react';

import Icon from '../Icon';

import { formatTime } from '../../lib/helpers';

const QueueItem = ({
    title,
    duration,
    isActive,
    onClickRemove,
    icon,
    ...props
}) => (
    <div
        className={['queue__item', isActive ? 'queue__item--active' : ''].join(
            ' '
        )}
        {...props}
    >
        <div className="queue__item-button icon-button">
            <Icon
                className={['icon', icon === 'loading' ? 'rotating' : ''].join(
                    ' '
                )}
                name={icon}
            />
        </div>

        <div className="queue__item-title">{title}</div>

        <div className="queue__item-duration">{formatTime(duration)}</div>

        <button
            className="queue__item-button icon-button"
            onClick={onClickRemove}
        >
            <Icon className="icon" name="close" />
        </button>
    </div>
);

export default QueueItem;
