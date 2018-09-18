require 'pry'
class BankAccount
  attr_reader :type, :number
  attr_accessor :amount

  def initialize(type,number,amount)
    @type = type
    @number = number
    @amount = amount
  end

  def deposit(free_money)
    @amount += free_money
  end


end # end BankAccount class
binding.pry
