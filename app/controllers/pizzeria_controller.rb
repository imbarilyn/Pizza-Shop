class PizzeriaController < ApplicationController
def index
    pizzas = Pizzerium.all
    render json: pizzas
end
end
