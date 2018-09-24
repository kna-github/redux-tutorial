import React from 'react'
import PropTypes from 'prop-types'

export class Page extends React.Component {
    onBtnClick = e => {
        const year = +e.currentTarget.innerText
        this.props.getPhotos(year)
    }

    render() {
        const { photos, year, isFetching } = this.props

        return (
            <div>
                <div>
                    <button onClick={this.onBtnClick}>2018</button>
                    <button onClick={this.onBtnClick}>2017</button>
                    <button onClick={this.onBtnClick}>2016</button>
                </div>
                {isFetching ?
                    <p> Загрузка... </p> :
                    <p>
                        У тебя {photos.length} фото за {year} год
                    </p>
                }
            </div>
        )
    }
}

Page.propTypes = {
    photos: PropTypes.array.isRequired,
    year: PropTypes.number.isRequired,
    isFetching: PropTypes.bool.isRequired,
    getPhotos: PropTypes.func.isRequired,
}