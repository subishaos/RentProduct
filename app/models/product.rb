class Product < ApplicationRecord
  has_one :image, as: :imageable
  belongs_to :user
  belongs_to :order, optional: true
  belongs_to :category
  belongs_to :wishlist, optional: true
  has_many :items

  validates_presence_of :name
end
