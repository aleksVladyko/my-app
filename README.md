# Основные настройки
INSTALLED_APPS = [
    ...
    'corsheaders',
    'rest_framework',
    ...
]

MIDDLEWARE = [
    ...
    'corsheaders.middleware.CorsMiddleware',  # Должен быть как можно выше
    'django.middleware.common.CommonMiddleware',
    ...
]

# Настройки CORS
CORS_ALLOW_CREDENTIALS = True
CORS_ALLOWED_ORIGINS = [
    "https://.............",
    "http://localhost:3000",  # Для разработки добавь хосты откуда идут запросы в этом массиве
    "https://dev........",
]

CORS_ALLOW_METHODS = [
    'DELETE',
    'GET',
    'OPTIONS',
    'PATCH',
    'POST',
    'PUT',
]

CORS_ALLOW_HEADERS = [
    'accept',
    'accept-encoding',
    'authorization',
    'content-type',
    'dnt',
    'origin',
    'user-agent',
    'x-csrftoken',
    'x-requested-with',
]

# Настройки сессии и кук
SESSION_COOKIE_SECURE = True  # Для HTTPS
SESSION_COOKIE_SAMESITE = 'None'  # Для кросс-доменных запросов
CSRF_COOKIE_SECURE = True
CSRF_COOKIE_SAMESITE = 'None'
CSRF_TRUSTED_ORIGINS = CORS_ALLOWED_ORIGINS.copy()
```
