module Paperclip
  module Interpolations
    def self.interpolate pattern, *args
      if pattern.kind_of? Symbol
        args.first.instance.send(pattern)
      else
        all.reverse.inject( pattern.dup  ) do |result, tag|
          result.gsub(/:#{tag}/) do |match|
            send( tag, *args  )
          end
        end
      end
    end
  end
end

