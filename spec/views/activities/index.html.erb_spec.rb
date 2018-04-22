require 'rails_helper'

RSpec.describe "activities/index", type: :view do
  before(:each) do
    assign(:activities, [
      Activity.create!(
        :title => "Title"
      ),
      Activity.create!(
        :title => "Title"
      )
    ])
  end

  it "renders a list of activities" do
    render
    assert_select "tr>td", :text => "Title".to_s, :count => 2
  end
end
