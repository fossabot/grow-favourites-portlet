import React from 'react';

import { GrowCardHorizontal } from "grow-clay";

class GrowFavouritesSlide extends React.Component {
  
	constructor(props) {
		super(props);
		
		this.state = {
			data: this.props.data
		};
	}

  render() {
	  
	const { data } = this.state; 
	  
    return (
		<div className="grow-favourites-slide">
			
			{data.map((cardData, key) => 
				<div className="row" key={"row-"+this.props.slideIndex+"-"+key}>
					<div className="col-sm" key={"col-"+this.props.slideIndex+"-"+key}>
						<GrowCardHorizontal
							key={"growfavouritescard-"+this.props.slideIndex+"-"+key}
							spritemap={this.props.spritemap}
							portalUrl={this.props.portalUrl}
							handleStarClick={this.props.handleStarClick}
							articleAuthor={cardData.articleAuthor}
							articleAuthorAvatar={cardData.authorAvatar || cardData.articleAuthorAvatar}
							articleCreateDate={cardData.createDate || cardData.articleCreateDate}
							articleTitle={cardData.articleTitle}
							articleCategory={cardData.articleCategory}
							userInitials={cardData.userInitials}
							star={cardData.star}
							id={cardData.id}
							interactive={true}
							href={cardData.articleTitle ?
								this.props.portalUrl +
								"/" +
								(cardData.articleCategory || "Share") +
								"/" +
								cardData.articleTitle
									.split(" ")
									.join("+")
									.replace(/'/g, '_APOSTROPHE_')
									.toLowerCase()
								: undefined
							}
						/>
					</div>
				</div>
			)}
			
		</div>
    )
  }

}

export default GrowFavouritesSlide;