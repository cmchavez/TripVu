Rails.application.config.middleware.use OmniAuth::Builder do
       
# provider <name>    <client id>             <client secret>

       provider :facebook, ENV["facebook_client_id"], ENV["facebook_secret"]

   end