class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  has_many :addresses
  has_many :products
  has_many :orders
  has_one :cart
  has_one :wishlist
  has_one :image, as: :imageable
  # has_one :wallet
end
