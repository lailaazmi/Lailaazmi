ARCHS = arm64 arm64e
TARGET = iphone:clang:11.2:11.0
include $(THEOS)/makefiles/common.mk

SUBPROJECTS += Lailaazmi
include $(THEOS_MAKE_PATH)/aggregate.mk

TWEAK_NAME = MenuStyle
MenuStyle_FILES = Tweak.xm
MenuStyle_CFLAGS = -fobjc-arc
MenuStyle_FRAMEWORKS = Foundation UIKit

include $(THEOS_MAKE_PATH)/tweak.mk

before-all::
	$(ECHO_NOTHING)echo " coping header to theos linclude directory..."$(ECHO_END)
	$(ECHO_NOTHING)cp -a MenuStyle.h $(THEOS)/include/$(ECHO_END)

stage::
	mkdir -p $(THEOS_STAGING_DIR)/usr/include
	$(ECHO_NOTHING)cp -a MenuStyle.h $(THEOS_STAGING_DIR)/usr/include $(ECHO_END)

after-install::
	install.exec "killall -9 SpringBoard"
