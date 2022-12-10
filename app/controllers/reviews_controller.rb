class ReviewsController < ApplicationController

    def index 
        reviews = Review.all
        render json: reviews
    end

    def show
        review = Rreview.find_by(id: params[:id])
        if review
            render json: reviwe, status: 200
        else
            render json: {errors: "Review not found"}, status: 404
        end
    end

    def update 
        review = Review.find_by(id: params[:id])
        if review
            review.update(review_params)
            render json: review
        else
            render json: {error: "Review not found"}, status: 404
    end
end

    def destroy
        review = Review.find_by(id: params[:id])
        if review 
            review.destroy
            head :no_content
        else 
            render json: {error: "Review not found"}, status:  404
        end
        
    end

    private

    def review_params
        params.permit(:comment)
    end
end





