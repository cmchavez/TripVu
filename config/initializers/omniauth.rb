Rails.application.config.middleware.use OmniAuth::Builder do
       
# provider <name>    <client id>             <client secret>

       provider :facebook,"383223005202534", "ae4b57b4f661f2c3535cdb74d7c914b6"
end