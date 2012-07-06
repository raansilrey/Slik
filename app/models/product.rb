class Product < ActiveRecord::Base
  attr_accessible :name, :precio
	validates :name, :presence => true
	validates :precio, :numericality => true
	has_many :d_combos
	has_many :e_combos, :through => :d_combos
end