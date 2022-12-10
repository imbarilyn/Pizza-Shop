class Review < ApplicationRecord
    belongs_to :user
    belongs_to :pizzerium

    validates :comment, inclusion: {in: ['Good', 'Bad', 'Average'] }
end
