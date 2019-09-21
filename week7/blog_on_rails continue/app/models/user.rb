class User < ApplicationRecord
    has_secure_password
    has_many :posts, dependent: :nullify
    has_many :comments, dependent: :nullify

   

    validates(:name, presence: true)
    validates(:email, presence: true, uniqueness: true)

    validate :current_password_is_correct,
           if: :validate_password?, on: :update_password
           

    def current_password_is_correct
                # For some stupid reason authenticate always returns false when called on self
        if User.find(id).authenticate(current_password) == false
            # flash[:notice] = 'current password not currect'
            errors.add(:current_password, "is incorrect.")
        end
    end
            
    def validate_password?
        !password.blank?
    end

    #attr_accessor :current_password

end
